[React, Redux]
(https://velog.velcdn.com/images/ubin_ing/post/4eb59be7-ca41-47e8-b0e9-c840cd876d81/image.jpeg)
{20230525}

이 글은 벨로퍼트의 '리액트를 다루는 기술' 책을 읽으며 공부한 내용을
정리한 글이다. 벨로퍼트 책 읽고 벨로퍼트가 만든 벨로그에 글올리기^^..
무한 샤라웃 투 벨로퍼트님 내 리액트 스승님 으악으악억억욕역엑

### 공부하게 된 계기

교내 동아리에서 스터디를 하게 되었는데, 첫 번째 주제가 리덕스였다.

리덕스에 대한 개념만 알고 사용하지는 않고 있었다.
사실 난 리액트를 공부하던 시절, 리덕스에 관한 챕터를 다룬 내용이 있었는데,
초반에 바닐라 자바스크립트로 리덕스를 배우는 예제가 있었다.

당시 우매했던 나는 "나는 리액트 쓰는데 바닐라 왜함?"이라는 오만방자한
생각을 했고... 리덕스 공부를 소홀히했다^^.. 반성하겠다.....

이참에 리덕스를 빠삭하게 공부해서 정리하고 실무에서 사용해보고,
리덕스의 여러가지 미들웨어들이 하는 일에 대해서도 알아보자.

### 리덕스가 뭐야?

리덕스는 자바스크립트 어플리케이션의 상태 관리 라이브러리이다.
리액트 등의 다른 라이브러리들과 함께 사용할 수 있어서  
현업에서도 많이 사용하는 라이브러리이다.

그렇다면 다른 상태관리 라이브러리들과 리덕스의 차이점이 뭘까?
먼저, 리덕스의 장단점과, 리덕스만 가지고 있는 장점을 알아보자.

먼저 장단점을 찾아볼 때 도움을 준 블로그를 무한 샤라웃하고 가겠다.
<a href="https://dalaranl.github.io/react/redux-mobx-context/">링크</a>

### 리덕스의 장점

#### 상태 예측

동일한 상태와 액션이 리듀서에 전달되면, 순수 함수인 리듀서는 멱등성을 보장한다.
또 이전 상태의 사이를 이동하고 결과를 볼 수 있다는 장점이 있다.

#### 유지 보수

리덕스는 다른 상태관리 라이브러리들과 달리 코드 구성 방법이 매우 엄격하다.
따라서 애플리케이션 구조를 잘 이해하면 쉽게 코드를 유지보수할 수 있다.

#### 디버깅

어떤 액선이 일어나고 상태의 변화가 모두 로그에 남는다.  
개발자는 이전의 특정 상태로 돌아가볼 수 있어 디버깅이 용이하다.

#### 스토어

상태를 한 곳에서 관리하여 전역상태를 관리할 때 효율적이다.

### 리덕스의 단점

#### 코드 양 증가

리덕스를 사용해 코드를 작성할 때, 필수로 만들어야하는 파일이 있어
또한 스토어와 컴포넌트를 연결하려면 또 다른 메서드가 필요하다.
그만큼 코드의 양이 증가하게 된다.

#### 읽기 전용

리덕스는 상태를 읽기 전용으로 취급하나 그렇게 만들어주지는 않는다.
항상 상태를 직접 수정하지 않게 조심해야한다.

### 리덕스만의 장점

리덕스만의 장점은 여러가지이다.
먼저 디버깅이 다른 라이브러리에 비해 쉽고, 여러가지의 미들웨어를 제공한다.
또한 Context API같은 라이브러리에 비해 성능 자체가 높으며,
출시한지 오래된 라이브러리이기에 상대적으로 레퍼런스가 많다.

그럼 이제 리덕스를 사용할 이유가 생겼으니 사용해보자!
먼저, 사용할 함수들을 정의하고 세팅하는 작업부터 시작해보자.

### 액션 타입과 액션 생성 함수 정의

관리해야하는 상태에 변화를 주는 것을 액션이라고 한다.
바닐라 JS를 토대로 액션 타입과 액션 생성 함수를 정의해보자.

#### 매직 리터럴 피하기

먼저 액션의 이름을 매직 리터럴을 피하기 위해 상수로 선언하자.

```js
/* 액션 이름 선언하기 */
const ONCLICK = "ONCLICK";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
```

#### 액션 '생성' 함수 작성 (헷갈리지 말기)

그 다음은, 액션 생성 함수를 작성해주자.
액션 생성 함수는 단순히 객체의 type값에 액션을 넣어주는 함수이다.
type은 반드시 들어가야하는 값이며, 다른 값은 마음대로 넣어도 된다.

```js
/* 액션 생성 함수 선언하기 */
const onClick = () => ({ type: ONCLICK });
const increase = (diff) => ({ type: INCREASE, diff });
const decrease = () => ({ type: ONCLICK });
```

#### 초깃값 세팅하기

거의 세팅 완료! 이제 초깃값을 설정하자.
초깃값은 상태 관리할 상태의 기본값이다.

```js
const initState = {
  toggle: false
  counter: 0
}
```

#### 리듀서 함수 정의하기

리듀서 함수를 정의해보자. 리듀서 함수는 실제로
상태를 변화시키는 일을 하는 함수이다. 파라미터로는 현재 상태와,
어떤 액션인지를 구별하기 위해 액션 값을 받아온다.

state가 입력되지 않는 것을 위해 state의 디폴트값을 initState로 지정해주자.

```js
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ONCLICK:
      return {
        /* counter값 그대로, ONCLICK시 토글만 변경 */
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        /* toggle값 그대로, INCREASE시 diff값 추가 */
        ...state,
        counter: state.counter + action.diff,
      };
    case DECREASE:
      return {
        /* toggle값 그대로, DECREASE시 counter - 1 */
        ...state,
        counter: state.counter - 1,
      };
    default:
      /* 해당하지 않으면 아무 동작도 수행하지 않음 */
      return state;
  }
};
```

리듀서는 상태의 불변성을 유지하며 데이터에 변화를 일으켜야 하기에,
스프레드 연산자를 사용해서 불변성을 유지한다.
허나 객체의 구조가 복잡해지면 번거로워지고 가독성이 나빠져,
리덕스의 상태는 깊지 않은 구조로 진행하거나 immer등의
외부 불변성 관리 라이브러리를 사용하는 것이 좋다.

이제 액션과 리듀서를 모두 정의했으니 이를 사용할 스토어를 만들자!

#### 스토어 만들기 & 상태 불러오기

스토어를 만들 때에는 createStore 함수를 사용한다.
함수를 생성할 때는 리듀서 함수를 파라미터로 전달한다.
getState()를 통해 상태를 불러올 수 있다.

```js
import { createStore } from "redux";

const store = createStore(reducer);

const state = store.getState();

console.log(state.toggle); // false
console.log(state.counter); // 0
```

#### 함수 구독하기

함수를 구독한다는 말이 조금 어색할 수 있다.
이 뜻은, 스토어의 상태가 바뀔 때마다 특정 함수가 호출되게 한다는 뜻이다.
이는 스토어의 내장 함수인 subscribe를 사용해 수행할 수 있다.

subscribe 함수의 파라미터로 구독할 함수를 전달한다.
이는 액션이 발생해 상태가 업데이트될 때마다 호출된다.

```js
const printConsole = () => {
  console.log("리덕스 히히 리독스 히히 리듁스");
};

const unsubscribe = store.subsribe(printConsole);
```

다음 코드는 함수를 구독함과 동시에 구독 취소 함수를 생성하는 코드이다.
store.subscribe를 unsubscribe에 대입함과 동시에 실행시켜
함수를 구독하게 하고, 구독을 비활성화하고 싶을 때 unsubscribe 함수를
호출시켜서 비활성화시킬 수 있다.

지금은 이렇게 subscribe 함수를 사용하지만, react-redux라는
라이브러리가 이 작업을 대신해줄 수 있다. 알면 알수록 편하게 사용할 수
있는 라이브러리가 리덕스인 것 같다!! 그럼 힘내서 계속 달려보자.

#### 액션 발생시키기

이제 함수를 구독하는 법과 스토어에 대해서도 알았으니,
제일 중요한 상태 변경, 즉 액션을 발생시켜보자.

액션을 발생시키는 것을 디스패치라고 한다.
파라미터는 액션 생성 함수를 넣어주면 된다.

```js
const onClickToggleButton = () => {
  store.dispatch(toggleSwitch());
};

const onClickIncreaseCounter = () => {
  onClickToggleButton();
  store.dispatch(increase(5));
};

const onClickDecreaseCounter = () => {
  onClickToggleButton();
  store.dispatch(decrease());
};
```

이런 식으로 리덕스를 통해 상태를 관리할 수 있다!
정말 정밀하고 엄격하게 관리가 되어 편한 유지 보수를 할 수 있을 것 같다.
이제 이런 리덕스를 지혜롭게 사용하기 위한 규칙을 알아보자.

### 리덕스의 규칙

리덕스를 사용할 때 지켜야 하는 세 가지의 규칙을 알아보자!

#### 단일 스토어

스토어는 무조건 한 애플리케이션 안에 하나만 존재해야 한다.
여러 개의 스토어를 분리할 수도 있지만, 상태 관리가 복잡해질 수 있다.

#### 읽기 전용 상태

리덕스는 장단점 챕터에서 말했던 것처럼 읽기 전용이다.
따라서 기존 객체를 수정하는게 아닌, 새로운 객체를 생성해주며
불변성을 유지해주어야 한다.

#### 리듀서는 무조건 순수 함수

리듀서 함수는 무조건 순수함수여야 한다.
객체지향 원칙과 비슷한데, 파라미터 이외의 값에는 의존하면 안된다.
또한 불변성과 멱등성을 동시에 유지해야한다.

이제 리액트에 적용하여 리덕스를 통해 투두리스트 상태를 관리해보자.

### 리액트와 리덕스로 투두리스트 구현하기

위에서 밟은 단계처럼 하나씩 해보자.

#### 매직 리터럴 피하기

투두 등록, 체크/체크 해제, INPUT값, 제거 등의 상태를 상수로 선언하자.
큰 애플리케이션은 타입이 충돌할 수 있어 앞에 도메인명을 /로 구분해 작성하낟.

```js
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const CHECK = "todos/CHECK";
const REMOVE = "todos/REMOVE";
```

#### 액션 생성 함수 작성

액션 생성 함수를 만들자.

```js
let id = 3;

export const onChangeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

export const onInsertTodo = (contents) => ({
  type: INSERT,
  todo: {
    id: id++,
    contents,
    isCompleted: false,
  },
});

export const onToggleTodo = (id) => ({
  type: TOGGLE,
  id,
});

export const onRemoveTodo = (id) => ({
  type: REMOVE,
  id,
});
```

약간 복잡하긴 하다!! 이제 초깃값을 생성해주자.

#### 초깃값 세팅하기

```js
const initTodo = {
  input: "",
  todos: [
    { id: 1, contents: "리덕스 블로그 정리하기", isCompleted: true },
    { id: 2, contents: "웹 수업 클론코딩 과제하기", isCompleted: false },
  ],
};
```

오케이 굳. 이제 이를 토대로 한 리듀서 함수를 정의하자.
이번에는 if문과 구조분해할당을 사용해서 리듀서를 구성해볼 것이다.
좋은 방법이라 할 수는 없지만 리덕스를 다양하게 사용해보자는 차원에서..ㅎㅎ

#### 리듀서 함수 정의하기

```js
const todoReducer = (state = initTodo, action){
	const { type, input, id } = action
    const { todos } = state

    if(type === CHANGE_INPUT) {
      	return {
        	...state,
          	input
        }
    }

    if(type === INSERT) {
      	return {
        	...state,
          	todos: [...todos, action.todo]
        }
    }

    if(type === TOGGLE) {
      	return {
        	...state,
          	todos: todos.map((todo) =>
				todo.id === id ? {
            		...todo,
              		isCompleted: !todo.isCompleted
            	} : todo
			);
        }
    }

    if(type === CHANGE_INPUT) {
      	return {
        	...state,
          	input
        }
    }

  	if(type === REMOVE) {
     	return {
         	...state,
         	todos: todos.filter((todo) => todo.id !== id)
        }
    }

  	return state
}

```

투두리스트를 관리하려니 벌써부터 복잡하고 머리가 아프다!!!!
그래도 겨우 리듀서 함수를 만들었으니 이제 스토어를 생성하고
사용할 일만 남았다! 행복해져보자..!!!!!

#### 루트 리듀서 만들기

그 전에, 루트 리듀서를 만들자. 상태관리할 상태들과 리듀서 함수들이 많다면,
이를 묶어주는 combineReducer라는 함수를 이용해 함수를 묶어줄 수 있다.

```js
import { 는 알아서 해주세요.. }

const reducer = combineReducers({
  	todos,
  	// counter등 다른 상태들도 넣을 수 있겠죵?
})

```

이제 이 루트 리듀서를 통해 스토어를 만들고 접근해보자.

#### 스토어 만들기 & 상태 불러오기

리액트에서는 react-redux 라이브러리에서 제공하는 Provider
컴포넌트에 스토어를 넣어주어 앱을 감싸야 작동한다.

```jsx
// src/index.js
import { 알아서 해주세요.. }

const store = createStore(reducer);

export const unsubscribe = store.subsribe(()=>console.log('effect'))
...

root.render(
	<Provider store={store}>
  		<App />
  	</Provider>
);
```

세팅 끝! 이제 사용해보자!!

#### 액션 발생시키기..전에 connect하기

컴포넌트에 리덕스를 연결하기 위해서는 connect함수를 사용해야 한다.
mapStateToProps와 mapDispatchToProps라는 함수가 파라미터로
들어간다.
이는 각 리덕스 스토어 안의 상태를 넘겨주는 함수,
액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용된다.
connect 함수에서 함수를 따로 선언하지 않고 바로 써주어도 된다.

이를 위해 컨테이너 컴포넌트를 만들어주자.

```jsx
const TodosContainer = ({
  	input,
  	todos,
 	changeInput,
  	insert,
  	toggle,
  	remove
}) => {
  return (
  	<Todos
    	input={input}
		todos={todos}
		changeInput={changeInput}
		insert={insert}
		toggle={toggle}
		remove={remove}
		/* 예제를 위해서이니.... 실제 쓸때는 전개연산자를 유용히 사용하자.. 힘들어 */
  );
}

export default connect(
	({ todos }) => ({
        /* state들 */
      	input: todos.input,
      	todos: todos.input
    }),
  	{
    	changeInput,
      	insert,
      	toggle,
      	remove
    }
)(TodosContainer);
```

이제 Todos 컴포넌트를 구현하자!!!
편의를 위해 TodoItem과 같은 파일에 선언해 사용해보자.
TodoItem의 레이아웃은 빠른 설명을 위해 생략하겠다.

```jsx
// components/Todos.js
const TodoItem = ({ todo, onToggle, onRemove }) => {
 	return <JSXElement>
}

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove
}) => {
 	const onSubmitTodo = (e) => {
     	e.preventDefault();
      	onInsert(input);
      	onChangeInput('');
    }

    return (
		<div>
	    	<form onSubmit={onSubmitTodo} >
      			<input value={input} onChange={onChange} />
		        <button type="submut">등록</button>
			</form>
      		<div>
              {todos.map((todo) => (
                <TodoItem {...todo} />
              ))}
 	        </div>
		</div>
    )
}
```

이런 식으로 구현할 수 있다! 이렇게 되면 여러가지의 상태를
리덕스를 통해 효율적으로 관리할 수 있다.
하지만 이렇게 관리한다면 하나의 상태 관리 로직을 구현하는 데에
너무 많은 시간이 소비되게 된다.

### 리덕스 더 편하게 사용하기

![](https://velog.velcdn.com/images/ubin_ing/post/8414711e-9b79-4f7a-8195-9115cd7f769d/image.png)

그럼 이제... 개념이 완성됐다!! 편해지러가자!!!
redux-actions라는 라이브러리에 대해서 알아보자.

### redux-actions

reudx-actions를 사용하면 액션 생성 함수를 짧게 작성할 수 있다.
또 리듀서 함수도 if, switch문이 아닌 handleActions라는
함수를 사용해 설정하여 작성할 수 있다.

다음과 같이 간단한 카운터에서 사용해보자.

```jsx
import { createAction, handleActions } from 'redux-actions'

...

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initState = {
  number: 0,
}

const counterReducer = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE}: (state, action) => ({ number: state.number - 1 }),
  },
  initState
)
```

코드가 훨씬 더 짧아지고 가독성이 좋아진 것을 알 수 있다!
이제 액션 생성 함수에서 파라미터를 필요로 할 때를 알아보자.

```jsx
const MY_ACTION = "sample/MY_ACTION";
const myAction = createAction(MY_ACTION);
console.log(myAction("hello world"));
// { type: MY_ACTION, payload: 'hello world' }
```

바로 payload에 넣는 것이 아니라 변형하고 싶다면, 두 번째 파라미터에
payload를 정의하는 함수를 선언해주면 된다.

```jsx
const myAction = createAction(MY_ACTION, (contents) => `${contents}!`)

// todolist 문법으로 알아보자
const insert = createAction(INSERT, (payload) => ({
  id: id++,
  contents,
  isCompleted: false
})
```

이렇게 되면 액션 생성과 리듀서 함수는 훨씬 편해지게 된다!
이제 컨테이너 컴포넌트를 편하게 만드는 법에 대해서 알아보자!! 점ㅁ점 편해지는 중!

### Hooks를 사용해 컨테이너 컴포넌트 만들기

#### useSelector, useDispatch

react-redux에서 제공하는 훅들을 사용하면 connect 함수, 즉
컨테이너를 굳이 만들지 않고도 상태를 불러올 수 있다.
또 useDispatch를 통해 액션을 실행시킬 수 있다.

```jsx
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  return <TodoListItem {...todos} onIncrease={() => dispatch(increase())} onDecrease={() => dispatch(decrease())} />;
};
```

useDispatch를 사용할 때에는 useCallback을 사용해
컴포넌트를 최적화하는 것을 습관으로 들이자.

```jsx
const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
```

막 예제 던지고 설명해서 미안하지만.. 다 이해 되자나! 쉽자나!!
최고의 설명은 코드이다. 우리 코드로 대화하쟝..
바로 useStore 예제 들어간다 입벌려

#### useStore

```jsx
const store = useStore();
store.dispatch();
store.getState();
```

이런 식으로 useStore를 통해서 컴포넌트 내부에서 객체를 사용할 수 있다.
react-redux에서 사용하는 훅을 유용하게 사용하면 아주 질높은 코드가 된다.

#### useActions

마지막으로 useActions라는 훅을 알아보고 마치자.
리덕스에서 정식으로 출시할 훅이었는데, 필요없다고 판단되어 빠졌다고 한다.
허나 리덕스 공식 웹에서 코드를 복사해 사용할 수 있다.

```jsx
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

const useActions = (actions, deps) => {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Arrays.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps,
  );
};

export default useActions;
```

이 훅을 유용하게 사용하면, 여러가지의 액션 함수들이 있을 때에
코드의 유지보수를 쉽게하고 가독성을 높인다.

```jsx
const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);
const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
```

```jsx
/* useActions 사용 */
import useActions from "경로";

const [onChangeInput, onInsert, onToggle, onRemove] = useActions([changeInput, insert, toggle, remove], []);
```

한 줄 만에 정의가 끝난다!! 이렇게 편할 수가!

### 마무리

리덕스에 대해 이렇게 전반적인 모든 정보들을 알아보았다.
생각보다 공부할 양이 엄청나게 많아서 지쳤지만, 너무 재밌게 공부했다.
또 내가 리액트를 처음 배우며 이 챕터를 읽고 공부했을 때는 진짜
단 한 마디도 이해되지 않았으나, 다시 책을 보며 공부해보니 모든 내용이
이해되어 너무 기분이 좋고 뿌듯했다. 다음엔 끝판왕인 리덕스 미들웨어에 대해 알아보자^^...
