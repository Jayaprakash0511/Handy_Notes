import { twMerge } from 'tailwind-merge';

export const BackButton = ({setClicked}) => {
  console.log("sodi")

  return (
  <div>
    <button
      onClick={() => setClicked(false)}
      className={twMerge(
        'px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100'
      )}
    >
      Back
    </button>
  </div>
  )

}
