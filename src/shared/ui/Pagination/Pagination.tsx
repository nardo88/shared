import { type Dispatch, type SetStateAction, useEffect, useMemo, useState } from 'react'

import { classNames } from '@shared/helpers/classNames'
import Left from '@shared/ui/icons/Left'
import Right from '@shared/ui/icons/Right'

import { CustomSelect } from '../CustomSelect/CustomSelect'

import cls from './Pagination.module.scss'

type PaginationProps = {
  total: number
  showTotal?: boolean
  className?: string
  currentPage: number
  pageCount?: number
  setPageCount?: Dispatch<SetStateAction<number>>
  limit?: number
  onChange: (newCurrentPage: number) => void
}

type PageIncrementProps = {
  goToLastPage: (value: number) => void
  lastPage: number
  total: number
  maxPageNumberLimit: number
}

type PageDecrementProps = {
  goToFirstPage: (value: number) => void
  minPageNumberLimit: number
}

const PageDecrement = ({ minPageNumberLimit, goToFirstPage }: PageDecrementProps) => {
  return minPageNumberLimit >= 1 ? (
    <>
      <li className={cls.item} onClick={() => goToFirstPage(1)}>
        1
      </li>
      <li className={cls.dotItem}> &hellip; </li>
    </>
  ) : null
}

const PageIncrement = ({
  goToLastPage,
  lastPage,
  total,
  maxPageNumberLimit,
}: PageIncrementProps) => {
  return total > maxPageNumberLimit ? (
    <>
      <li className={cls.dotItem}> &hellip; </li>
      <li className={cls.item} onClick={() => goToLastPage(lastPage)}>
        {lastPage}
      </li>
    </>
  ) : null
}

const Pagination = ({
  total = 0,
  showTotal = true,
  currentPage,
  onChange,
  pageCount = 5,
  setPageCount,
  limit = 5,
  className,
}: PaginationProps) => {
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0)

  const [pages, lastPage] = useMemo(() => {
    const pages = Array.apply(null, Array(Math.ceil(total / pageCount))).map(
      (_, index) => index + 1
    )
    return [pages, pages[pages.length - 1]]
  }, [total, currentPage, pageCount])

  const checkNumberLimit = (value: number) => {
    if (Math.floor(limit / 2) + value > maxPageNumberLimit && maxPageNumberLimit <= lastPage) {
      const nextValue =
        value + Math.floor(limit / 2) < lastPage ? value + Math.floor(limit / 2) : lastPage
      setMaxPageNumberLimit(nextValue)
      setMinPageNumberLimit(nextValue - limit)
    }
    if (value - Math.floor(limit / 2) <= minPageNumberLimit && minPageNumberLimit > 0) {
      const prevValue = value - Math.ceil(limit / 2) >= 0 ? value - Math.ceil(limit / 2) : 0
      setMinPageNumberLimit(prevValue)
      setMaxPageNumberLimit(prevValue + limit)
    }
  }

  const handleClick = (value: number) => {
    onChange(value)
    checkNumberLimit(value)
    scrollTo()
  }

  const getPagesString = () => {
    const minValue = currentPage * pageCount - pageCount + 1
    const maxValue = currentPage * pageCount

    return `${minValue}-${maxValue > total ? total : maxValue}`
  }

  useEffect(() => {
    setMaxPageNumberLimit(5)
    setMinPageNumberLimit(0)
  }, [total])

  if (!total || total <= pageCount) return null

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {/* TOTAL */}
      {showTotal && <div className={cls.total}>{`${getPagesString()} из ${total} элементов`}</div>}

      {/* BUTTONS */}
      <ul className={cls.buttonsWrapper}>
        {/* LEFT ARROW */}
        <li>
          <div
            className={classNames(cls.prev, { [cls.disabled]: currentPage === 1 }, [cls.sidebtn])}
            onClick={() => {
              if (currentPage !== 1) handleClick(currentPage - 1)
            }}
          >
            <Left />
          </div>
        </li>

        <PageDecrement minPageNumberLimit={minPageNumberLimit} goToFirstPage={handleClick} />
        {pages.map((item: number) => {
          if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
            return (
              <li key={item}>
                <button
                  onClick={() => handleClick(item)}
                  className={classNames(cls.item, {
                    [cls.current]: item === currentPage,
                  })}
                >
                  {item}
                </button>
              </li>
            )
          }
        })}
        <PageIncrement
          goToLastPage={handleClick}
          lastPage={lastPage}
          total={pages.length}
          maxPageNumberLimit={maxPageNumberLimit}
        />

        {/* RIGHT ARROW */}
        <li>
          <div
            className={classNames(cls.sidebtn, {
              [cls.disabled]: currentPage === Math.ceil(total / pageCount),
            })}
            onClick={() => {
              if (currentPage !== Math.ceil(total / pageCount)) handleClick(currentPage + 1)
            }}
          >
            <Right />
          </div>
        </li>
      </ul>

      {/* COUNTER DROPDOWN */}
      <div className={cls.counter}>
        {!!setPageCount && (
          <>
            <span>Показать:</span>
            <CustomSelect
              className={cls.counterSelector}
              value={{ id: pageCount.toString(), title: pageCount.toString() }}
              onChange={(v) => {
                setPageCount(parseInt(v.id))
                handleClick(1)
              }}
              options={[
                { id: '5', title: '5' },
                { id: '10', title: '10' },
                { id: '20', title: '20' },
                { id: '50', title: '50' },
              ]}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Pagination
