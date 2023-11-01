function NewArticle({ title, text1, text2, text3 }) {
  return (
    <article className="article">
      <h2>{title}</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </article>
  );
}

export default NewArticle;