![2022-09-01_040634](https://user-images.githubusercontent.com/80756638/187762101-89775202-a15f-4809-ac0b-2892d9a6a0ef.jpg)

* 위에 있는 항목인 title, amount, date를 입력하여 아래 창에 표현할 수 있는 기능 연습
* 연도별로 filter를 사용 하여 그 연도에 맞게 출력할수 있게 했음

<h1> Button && form </h1>



```
<button type="submit">Button</button>
은 왠만하면  <form> tag와 쓰는 것이 좋다. 
그리고 
<button type="submit" onClick={}>Button</button>
button tag 안에 onClick을 쓰지 않도록 해야 한다. 왜냐하면 button 안에
onClick 기능이 있기 때문이다. 
그래서
<form onSubmit={submitHandler}>
	<button type="submit">Button</button>
<form>
스타일로 만들어 주는 것이 좋고
  const submitHandler = (event) =>{
        event.preventDefault();
    };
button을 클릭했을때 
<form onSubmit={submitHandler}>
가 submitHandler 함수로 form 전체가 날아간다.
근데 이럴때 버튼을 누를때 마다 랜더링이 계속 되기 때문에 이것을 방지해주는
 event.preventDefault();
 이것을 꼭 써주어야 한다. 
```

<h1>useState로 객체정보 update 시키는 방법</h1>

```
<NewExpense onAddExpense={addExpenseHandler} /> 
에서 addExpenseHandler 함수를 호출할때 

 const addExpenseHandler = (expense) => {
        // console.log('In App.js');
        // console.log(expense);
        // setExpenses([expense, ...expenses]);
        setExpenses((prevExpenses)=>{
          return [expense,...prevExpenses];
        })
 data를 update 시키기 위해 useState를 이용할때 
setExpenses([expense, ...expenses]);
이런 식보다는 
setExpenses((prevExpenses)=>{
          return [expense,...prevExpenses];
        })
이런식으로 prev를 이용한 스프래드 연산자를 이용하여 update 하는 것이 
안전하다. 
```



















