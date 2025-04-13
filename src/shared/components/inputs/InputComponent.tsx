import { ComponentProps, memo } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/shared/utils'

const groupVariants = cva('relative', {
  variants: {
    variant: {
      outline:
        'w-full rounded border border-gray-300 bg-white transition-[color,outline] focus-within:outline-blue-400 hover:outline-blue-600 hover:outline focus-within:outline'
    },
    size: {
      default: ''
    }
  },
  defaultVariants: {
    variant: 'outline',
    size: 'default'
  }
})

const inputVariants = cva('w-full peer', {
  variants: {
    variant: {
      outline: 'bg-inherit rounded outline-none placeholder:opacity-0 focus-within:placeholder:opacity-100'
    },
    size: {
      default: 'px-3 py-2 text-base'
    }
  },
  defaultVariants: {
    variant: 'outline',
    size: 'default'
  }
})

const labelVariants = cva(
  'absolute top-1/2 left-2 -translate-y-1/2 cursor-text bg-inherit text-base font-medium text-gray-400 transition-[top,font-size] duration-200',
  {
    variants: {
      variant: {
        outline: 'peer-focus-within:top-0 peer-focus-within:text-blue-400 peer-not-placeholder-shown:top-0'
      },
      size: {
        default: 'px-2 peer-focus-within:text-xs peer-not-placeholder-shown:text-xs'
      }
    },
    defaultVariants: {
      variant: 'outline',
      size: 'default'
    }
  }
)

interface InputComponentProps extends VariantProps<typeof groupVariants> {
  label?: string
  error?: string
  classNameGroup?: string
  classNameLabel?: string
}

export const InputComponent = memo(
  ({
    label,
    name,
    value,
    placeholder = '',
    type,
    error,
    onChange,
    classNameGroup,
    className,
    classNameLabel,
    variant,
    size,
    ...rest
  }: ComponentProps<'input'> & InputComponentProps) => {
    return (
      <div className="group-[input]">
        <div
          className={cn(
            groupVariants({ variant, size }),
            error && 'border-red-500 focus-within:border-red-500 hover:border-red-500',
            classNameGroup
          )}>
          <input
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            className={cn(inputVariants({ variant, size }), className, !label && 'placeholder:opacity-100')}
            {...rest}
          />
          {label && (
            <label
              htmlFor={name}
              className={cn(
                labelVariants({ variant, size }),
                error && 'font-semibold text-red-500 peer-focus-within:text-red-500',
                classNameLabel
              )}>
              {label}
            </label>
          )}
        </div>

        {error && <span className="mt-1 block pl-1 text-xs text-red-500">{error}</span>}
      </div>
    )
  }
)
