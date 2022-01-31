function ExpenseItem (props) {
    const title= props.title;
    const amount = props.amount;
    const date = props.date;
    return <div>
          <h2>{date}</h2>
          <div>
              <h2>{title}</h2>
              <div>{amount}</div>
          </div>
        </div>;
    
}

export default ExpenseItem;