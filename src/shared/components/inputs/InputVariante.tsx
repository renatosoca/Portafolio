import { cva } from 'class-variance-authority'

const inputVariants = cva(
  "after:content[''] relative w-full rounded-t border-b-[.15rem] border-gray-400 bg-gray-300 pt-2 text-gray-600 ease-in-out after:absolute after:top-full after:left-0 after:h-[.18rem] after:w-full after:scale-0 after:bg-[#5FA7F0] after:transition-all after:duration-300 group-focus-within:after:scale-100 hover:border-gray-500",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        inline:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60'
      },
      size: {
        default: 'px-7 py-3 has-[>svg]:px-3',
        sm: 'rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const InputComponent = () => {
  return (
    <div className="group">
      <div
        className={`after:content[''] relative w-full rounded-t border-b-[.15rem] border-gray-400 bg-gray-300 pt-2 text-gray-600 ease-in-out after:absolute after:top-full after:left-0 after:h-[.18rem] after:w-full after:scale-0 after:bg-[#5FA7F0] after:transition-all after:duration-300 group-focus-within:after:scale-100 hover:border-gray-500`}>
        <input
          className={`input w-full resize-none bg-inherit px-2 pt-3 pb-1 font-medium text-black ease-in outline-none placeholder:text-transparent placeholder:transition-colors placeholder:duration-200 group-focus-within:placeholder:text-gray-600`}
          type="email"
          id="email"
          placeholder="Ingresa tu email"
          autoComplete="off"
        />

        <label
          htmlFor="email"
          className={`input__label absolute top-[50%] left-2 -translate-y-1/2 cursor-text bg-inherit text-base font-medium text-gray-600 transition-[top,transform] duration-200 group-focus-within:top-[5%] group-focus-within:translate-y-0 group-focus-within:text-xs group-focus-within:text-[#5FA7F0]`}>
          Correo electrónico
        </label>
      </div>

      {false && (
        <div className={`px-2 text-[.8rem] font-medium text-red-500`}>
          <span>Error</span>
        </div>
      )}
    </div>
  )
}

export default InputComponent
