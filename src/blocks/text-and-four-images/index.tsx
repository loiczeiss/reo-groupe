export function TextAndFourImages() {
  return (
    <div className={'w-full h-screen flex'}>
      <div className={'w-2/5 flex flex-col'}>
        <div className={'flex flex-col'}>
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
        <div className={'flex'}>
          <div className={'flex flex-col'}>
            <h1>{subheading1}</h1>
            <p>{subcontent1}</p>
          </div>
          <div>
            <h1>{subheading2}</h1>
            <p>{subcontent2}</p>
          </div>
        </div>
      </div>
      <div className={'flex flex-col'}>
        <div>
          <Image />
        </div>
        <div>
          <div>
            <Image />
          </div>
          <div>
            <Image />
          </div>
          <div>
            <Image />
          </div>
        </div>
      </div>
    </div>
  )
}
