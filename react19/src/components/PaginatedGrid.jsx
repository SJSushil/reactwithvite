import { useState } from 'react'
import Grid from './Grid.jsx'

function PaginatedGrid({
  data = [],
  columns = [],
  pageSize = 5,
  pageable = {
    buttonCount: 5,
    info: true,
    pageSizes: [5, 10, 20],
    previousNext: true,
  },
  ...gridProps
}) {
  const [page, setPage] = useState({ skip: 0, take: pageSize })
  const pageData = data.slice(page.skip, page.skip + page.take)

  function handlePageChange(event) {
    setPage(event.page)
  }

  return (
    <Grid
      {...gridProps}
      data={pageData}
      columns={columns}
      pageable={pageable}
      skip={page.skip}
      take={page.take}
      total={data.length}
      onPageChange={handlePageChange}
    />
  )
}

export default PaginatedGrid
