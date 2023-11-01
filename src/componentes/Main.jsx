function Main() {
  return (
    <aside className="sidebar">
      {DataImg.map((data) => (
        <Aside className="sidebar" img={data.img} text={data.text} />
      ))}
    </aside>
  )
}