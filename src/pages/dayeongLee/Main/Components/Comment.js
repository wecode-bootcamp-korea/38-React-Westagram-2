function Comment(props) {
  return (
    <div key={props.element.id}>
      <div>
        {props.element.text}
        <button onClick={() => props.onRemove(props.element.id)}>삭제</button>
      </div>
    </div>
  );
}

export default Comment;
