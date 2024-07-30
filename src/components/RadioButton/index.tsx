import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const radioButtonStyles = cva(
  [
    'flex items-center w-full p-0 leading-tight transition-all outline-none',
    'hover:bg-opacity-80 hover:text-error',
    'focus:bg-opacity-80 focus:text-error',
    'active:bg-opacity-80 active:text-success'
  ],
  {
    variants: {
      size: {
        sm: 'size-5',
        md: 'size-6',
        lg: 'size-7'
      },
      isChecked: {
        true: 'bg-blue-gray-500 text-gray-900'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

type RadioButtonProps = ComponentProps<'div'> &
  VariantProps<typeof radioButtonStyles> & {
    label?: string
  }

function RadioButton({ label, size, className, ...props }: RadioButtonProps) {
  return (
    <div className={cn(radioButtonStyles({ size, className }))} {...props} role="button">
      <label
        htmlFor="vertical-list-react"
        className="flex items-center w-full px-3 py-2 cursor-pointer"
      >
        <div className="grid mr-3 place-items-center">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center p-0 rounded-full cursor-pointer"
              htmlFor="vertical-list-react"
            >
              <input
                onChange={() => {}}
                name="vertical-list"
                id="vertical-list-react"
                type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
              />
              <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <p className="text-foreground">{label}</p>
      </label>
    </div>
  )
}

export { RadioButton }

/**



*/
