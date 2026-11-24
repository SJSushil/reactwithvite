import { Grid as KendoGrid, GridColumn } from '@progress/kendo-react-grid'
import '@progress/kendo-theme-default/dist/all.css'

function Grid({ data = [], columns = [], ...gridProps }) {
  return (
    <KendoGrid data={data} {...gridProps}>
      {columns.map((column, index) => (
        <GridColumn
          key={column.field ?? `column-${index}`}
          {...column}
        />
      ))}
    </KendoGrid>
  )
}

export default Grid