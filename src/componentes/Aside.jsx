function AsideContent({ img, text }) {
  return (
    <div>
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default AsideContent;