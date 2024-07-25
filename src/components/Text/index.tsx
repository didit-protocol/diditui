import { cn } from '@/utils'
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types'
import { VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'

const textStyles = cva('w-full font-inter text-foreground capitalize', {
  variants: {
    variant: {
      H1: 'text-[52px] font-medium leading-[95%] tracking-tighter',
      H2: 'text-[42px] font-medium leading-[95%] tracking-tighter',
      H3: 'text-[32px] font-medium leading-[105%] tracking-tighter',
      H4: 'text-2xl font-medium leading-[110%] tracking-tight',
      H5: 'text-[15px] font-semibold leading-[95%] tracking-tight',
      H6: 'text-sm font-medium leading-[90%] tracking-tight',

      P1: 'text-[15px] font-normal leading-[140%] tracking-tight',
      P2: 'text-[13px] font-normal leading-[140%] tracking-tight',
      P3: 'text-xs font-normal leading-[150%] tracking-tight',

      Label1: 'text-[13px] font-normal leading-[90%] tracking-tight',
      Label2: 'text-xs font-normal leading-[90%] tracking-tight',
      Label3: 'text-[11px] font-normal leading-[140%] tracking-tight',
      Label4: 'text-[10px] font-normal leading-[140%] tracking-tight',

      StyledLabel: 'uppercase text-[8px] font-medium leading-[125.5%] tracking-widest'
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    },
    italic: {
      true: 'italic'
    },
    underline: {
      true: 'underline underline-offset-2'
    }
  },
  defaultVariants: {
    variant: 'H1',
    align: 'left',
    italic: false,
    underline: false
  }
})

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof textStyles>
>

type TextComponent = <C extends React.ElementType = 'span'>(
  props: TextProps<C>
) => React.ReactElement | null

// @ts-expect-error - unexpected typing errors
export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = 'span'>(
    { as, variant, align, italic, underline, className, ...props }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span'

    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({
            variant,
            italic,
            underline,
            align,
            className
          })
        )}
        {...props}
      />
    )
  }
)