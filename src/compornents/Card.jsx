const Card = ({ title, imgeUrl, imgeclassName, className }) => {
  return (
    <div className={`relative p-7 bg-bg_white rounded-22 border-2 border-solid border-dark ${className}`}>
      {imgeUrl && <img src={imgeUrl} alt={title || "イメージ画像"} className={`${imgeclassName}`}/>}
      <div className="pt-2">
        {title && <h2 className="text-xl md:text-2xl font-bold px-2">{title}</h2>}
      </div>
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[104%] rounded-22 bg-[#C6C4C7]"/>
    </div>
  )
}

export default Card