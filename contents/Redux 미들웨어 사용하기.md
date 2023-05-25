[React, Redux]
(https://velog.velcdn.com/images/ubin_ing/post/2a4df044-b2c0-406b-973a-c5fe3f2a2c59/image.jpeg)
{20230525}

API 서버를 연동할 때 관리하는 미들웨어에 대해서 리덕스와 함께 알아보자.

### 미들웨어 사용해보기

비동기 작업을 효율적으로 관리하기 위해 미들웨어를 사용해보자.
해당 글은 Counter 예제를 토대로 설계한 미들웨어에 대해 다룬다.
미들웨어는 액션을 디스패치할 때 처리하기 전에 지정된 작업들을 실행한다.
인터셉터의 역할을 하기도 한다.

간단하게 콘솔을 찍는 미들웨어를 작성해보자.

```jsx
const loggerMiddleware = (store) => (next) => (action) => {
  console.log(`prev : ${store.getState()}`);
  console.log(`action : ${action}`);
  next(action);
  console.log(`next : ${store.getState()}`);
};
```

이게 끝이다! 함수가 함수를 리턴하고 그 함수가 함수를 리턴하는 형식이다.
이제 미들웨어를 추가해보자. applyMiddleware 함수를 통해 스토어와 함께
추가할 수 있다.

```jsx
import { is self! }

const store = createStore(reducer, applyMiddleware(loggerMiddleware))
```

이제 실행을 한 다음 콘솔을 열어보면 상태가 찍히는 것을 알 수 있다.

### redux-logger 사용하기

이를 구현해놓은 라이브러리인 redux-logger를 사용해보자.
간단하게 알고 넘어가는 타임!

```jsx
import { is self }

const logger = createLogger()

const store = createStore(reducer, applyMiddleware(logger))
```

### 여러 미들웨어에 대해 알아보자

미들웨어가 어떤 일을 하는지를 이해했다면, 시중에 나와있는
멋지고 훌륭한 리덕스 미들웨어 라이브러리들 두 가지를 사용해보자.

### redux-thunk

리덕스를 사용하는 프로젝트에서 비동기를 처리할 때 사용하는 미들웨어이다.
API 비동기 처리를 인터셉터로 할 수도 있겠지만, 이렇게 전역 상태 관리를
할 때 ( 예를 들어 유저 정보 ) 미들웨어를 유용하게 사용하면 효율적으로
데이터를 핸들링할 수 있다.

#### thunk가 뭐야?

thunk는 특정 작업을 나중에 할 수 있게 미룬 것을 의미한다.
thunk의 작동 원리에 대해 간단한 코드로 알아보자.

```jsx
const addOne = (x) => x + 1;

const addOntThunk = (x) => {
  const thunk = () => addOne(x);
  return thunk;
};

const fn = addOneThunk(1); // 작동 X

setTimeout(() => {
  const value = fn(); // 실행되는 시점에 연산
  console.log(value);
}, 1000);
```

보통 useRouter, useNavigate같은 훅들은 상수로 선언하여
사용하는데, 이런 함수들과 비슷하게 작동하는 것이 thunk이다.

#### redux-thunk가 하는 일

redux-thunk를 사용하면 thunk 함수를 만들어 디스패치할 수 있다.
예시 함수를 알아보자.

```jsx
const thunk = () => (dispatch, getState) => {
  // ref now or dispatch new action
};
```

#### 스토어에 추가하기

redux-thunk를 스토어에 추가해보자.

```jsx
...
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(logger, thunk));
```

#### thunk 생성 함수 만들기

redux-thunk는 액션 생성 함수에서 함수를 반환한다.
Async함수를 만들어 카운터 값을 비동기적으로 변경시켜보자.

```jsx
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};
```

이렇게 하고 이 함수를 적용하면 숫자가 성공적으로 1초 뒤에 변경된다!
이제 API 요청 비동기 작업을 redux-thunk로 처리해보자.

### API 비동기 작업 처리하기

```jsx
export const getPost = (id) => {
 	axios.get('url');
}

// 상수 선언
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

// thunk 함수 생성
export const getAsyncPost = (id) => {
 	dispatch({ type: GET_POST })  // 요청 시작

  	try {
     	const payload = (await getPost(id)).data
      	dispatch({
        	type: GET_POST_SUCCESS,
          	payload
        })
    } catch (err) {
     	dispatch({
          	type: GET_POST_FAILURE,
          	payload: err,
          	error: true
        })
      throw err;
    }
};


// initial state

const initState = {
 	loading: {
      GET_POST: false,
      GET_USERS: false
    },
  	post: null,
}

// reducer
const reducer = handleAction({
  [GET_POST]: (state) => ({
  	...state,
    loading: {
     ..state.loading,
      GET_POST: true
    }
  }),
  [GET_POST_SUCCESS]: (state, action) => ({
  	...state,
    loading: {
     ..state.loading,
      GET_POST: false
    },
    post: action.payload
  }),
  [GET_POST_FAILURE]: (state, action) => ({
  	...state,
    loading: {
     ..state.loading,
      GET_POST: true
    }
  }),
  initState
});

```

이런 식으로 API의 상태 또한 리덕스를 통해 처리할 수 있다.

#### 코드 리팩토링하기

근데 코드가 너무 길다..!! 코드를 다음과 같이 리팩토링할 수 있다.

```jsx
createRequestThunk = (type, request) => {
 	const SUCCESS = `${type}_SUCCESS`;
	const FAILURE = `${type}_SUCCESS`;

  return (params) => async (dispatch) => {
	dispatch({ type });
    try {
     	...
    } catch (err) {
	    ...
    }
  }
}

createRequestThunk('GET_POST', getUsers);
```

이런 식으로 redux-thunk를 사용할 수 있다!!
조금 어렵긴 하지만 미들웨어의 역할을 제대로 해 유용하게 사용할 수 있다!
이제 더 어려운 redux-saga를 배우기 전에...
이에 필요한 문법을 짧게 배워보자.

### 제네레이터 함수

제네레이터 함수를 사용하면 yield라는 키워드를 통해 여러 개의 값을
한 함수 내에서 리턴할 수 있다.

제네레이터 함수는 function 키워드 앞에 애스터리스크를 붙여 선언할 수 있다.
이는 thunk 함수 방식으로 선언해 사용할 수 있으며,
next 함수를 통해서 값을 하나씩 반환할 수 있다.

```js
function* generator() {
  console.log(11);
  yield 1;
  console.log(22);
  yield 2;
  console.log(33);
  return 3;
}

const fn = generator();

fn.next();
// 11
// { value: 1, done: false }
fn.next();
// 22
// { value: 2, done: false }
fn.next();
// 33
// { value: 3, done: true }
fn.next();
// { value: undefined, done: true } ... 그 후로 계속 undefined 호출
```

생각보다 별 거 없다! 이제 redux-saga로 thunk로 구현했던 기능을 구현해보자.

### redux-saga 시작하기

패키지를 다운로드 받고 다음 함수들을 import해보자

```jsx
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

...

// 마우스 클릭 이벤트 payload에 들어가는 것 방지
const increaseAsync = createAction(INCREASE_ASYNC, () => undefined)
const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined)

function* increaseSaga() {
  yield delay(1000);
  yield put(increase())
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

function* counterSaga() {
  // 들어오는 모든 액션에 대해 특정 작업을 처리
  yield takeEvery(INCREASE_ASYNC, increaseSaga)

  yield takeLatest(DECREASE_ASYNC, decreaseSaga)
}

function* rootSaga() {
  // 여러 사가를 합쳐주는 역할 처리
  yield all([counterSaga()])
}
```

이제 사가를 정의했으니 마지막으로 사용해보자!

### redux-saga 사용하기

```jsx
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk, sagaMiddleware);
)
sagaMiddleware.run(rootSaga)
```

이렇게 되면 사가를 사용할 수 있다!!! 끝!!!!

### 마무리

이렇게 리덕스에서 미들웨어를 사용할 때 쓰는 thunk와 saga에 대해 알아보았다.
머리가 약간 아프긴 하지만.. 실무에서 사용해보고 부딪혀보면 완벽히
내 머릿속에 개념이 정리되어 자리잡을 것 같다!

이렇게 프론트엔드 첫 번째 스터디 끝!! 뿌듯하다!
빠삭하게 정리한 리덕스, 실무에서 야무지게 사용해보자!
