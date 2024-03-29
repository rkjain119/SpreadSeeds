import React from 'react'

function Sun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={props.className}
      {...props}
    >
      <path
        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        className='fill-sky-400/20 stroke-oyellow-10'
      />
      <path
        d='M12 4v1m5.66 1.344l-.828.828m3.173 4.832h-1m-1.345 5.66l-.828-.828M12 20.01V19m-5.66-1.336l.835-.836m-3.18-4.824h1.01M6 6l.835.836'
        className='stroke-oyellow-10'
      />
    </svg>
  )
}

export default Sun
