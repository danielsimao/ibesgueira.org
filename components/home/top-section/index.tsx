import classnames from 'classnames'

function SimpleSection({
  reverse,
  image,
}: {
  reverse?: boolean
  image: string
}): JSX.Element {
  return (
    <div
      className={classnames(
        'flex flex-col justify-between sm:flex-row mb-20 sm:px-4',
        !reverse && 'sm:flex-row-reverse',
      )}
    >
      <div className="px-4 mb-10 max-w-lg sm:my-auto sm:px-0 md:my-10 lg:my-24">
        <h2 className="text-4xl leading-tight font-bold md:text-5xl">
          Unidos em louvor ao Senhor
        </h2>
        <p className="text-lg leading-relaxed mt-4 md:text-xl">
          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
          auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
          tempus, viverra aliquet.
        </p>
      </div>
      <div
        className={classnames(
          'flex-none w-full h-80 relative sm:h-auto sm:w-1/2',
          !reverse ? 'md:mr-12 lg:mr-32' : 'md:ml-12 lg:ml-32',
        )}
      >
        <img
          src={image}
          alt=""
          className={classnames(
            'absolute inset-y-0 sm:inset-0 w-full h-full object-cover rounded-lg md:w-full md:h-full',
            !reverse ? '-left-20' : '-right-12',
          )}
        />
      </div>
    </div>
  )
}

function TopSection(): JSX.Element {
  return (
    <section className="relative pt-16 max-w-6xl m-auto">
      <div className="grid grid-rows-3 grid-cols-2 mb-20 md:grid-cols-5 md:grid-rows-2 md:gap-7 md:px-4 lg:grid-cols-6 lg:grid-rows-3 lg:gap-9">
        <div className="col-span-2 px-4 md:col-span-3 md:col-start-3 md:row-span-1 md:pr-0 md:pl-6 md:pb-6 lg:col-start-3 lg:col-span-4 lg: lg:pl-10 lg:pb-10">
          <h2 className="text-4xl leading-tight font-bold md:text-5xl md:mb-8">
            Unidos em louvor ao Senhor
          </h2>
          <p className="text-lg leading-relaxed mt-4 md:text-xl">
            Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
            auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
            tempus, viverra aliquet.
          </p>
        </div>
        <div className="col-span-1 row-span-2 relative md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1 lg:row-start-1 lg:row-span-2">
          <img
            src="../assets/pic8.jpg"
            alt=""
            className="absolute w-full h-3/4 object-cover rounded-lg top-5 right-3 md:w-full md:h-2/3 md:inset-0 md:top-20 lg:h-4/5 lg:top-26 xl:h-full"
          />
        </div>
        <div className="col-span-1 row-span-2 relative md:col-span-3 md:col-start-3 md:row-span-1 md:row-start-2 lg:col-span-4 lg:row-span-2">
          <img
            src="../assets/pic8.jpg"
            alt=""
            className="absolute w-full h-3/5 object-cover rounded-lg bottom-0 left-3 md:w-full md:h-full md:inset-0 lg:h-4/5 xl:h-full"
          />
        </div>
      </div>
      <SimpleSection image="../assets/pic8.jpg" />
      <SimpleSection image="../assets/pic2.jpg" reverse />
    </section>
  )
}

export { TopSection }
