

const Title = ({Title ,SubTitle ,align , font = "font-playfair"}) => {

  return (
    <div className={`flex flex-col justify-center items-center text-center text-${align === "left"
    && "md:items-start md:text-left"}`}>

      <h1 className={`${font} text-4xl font-bold text-gray-800`}>
        {Title}
      </h1>
      {SubTitle && (
        <p className="text-gray-600 mt-2 text-sm md:text-base max-w-174">
          {SubTitle}
        </p>
      )}
    </div>
  )
}

export default Title