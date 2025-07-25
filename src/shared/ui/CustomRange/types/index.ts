export type CustomRangeVariant = 'score' | 'percent'

interface ICustomRangeDefaultProps {
  className?: string
  label?: string
  value: number
  step?: number
  onChange: (val: number) => void
  errorText?: string | null
  disabled?: boolean
}

export interface ICustomRangePercentProps extends ICustomRangeDefaultProps {
  variant?: 'percent'
}

export interface ICustomRangeScoreProps extends ICustomRangeDefaultProps {
  variant?: 'score'
  max: number
  limit?: number // Число при котором мы не используем пунктиры
}

export type CustomRangePropsType =
  | ICustomRangePercentProps
  | ICustomRangeScoreProps
