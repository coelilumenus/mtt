import React from "react"
import { Row, Col, Table } from "reactstrap"
import { useAppSelector } from "../redux/hooks"
import { pageSlicer, sortName, sortCity, createItems } from "../utils/itemList.functions"

export const ItemList: React.FC = () => {
  const icon = <span className="material-icons-outlined text-secondary pointer align-middle fs-5 mb-1">expand_less</span>
  const noIcon = <div className="no-icon"></div>
  
  useAppSelector((state) => state.modal)
  useAppSelector((state) => state.page)
  const [sortBy, setSortBy] = React.useState(() => sortName)
  const [sortNameIcon, setSortNameIcon] = React.useState(icon)
  const [sortCityIcon, setSortCityIcon] = React.useState(<></>)

  const sortNameHandler = () => {
    setSortNameIcon(icon)
    setSortCityIcon(noIcon)
    setSortBy(() => sortName)
  }
  
  const sortCityHandler = () => {
    setSortNameIcon(noIcon)
    setSortCityIcon(icon)
    setSortBy(() => sortCity)
  }
  
  const elements: JSX.Element[] = pageSlicer(createItems(sortBy))

  return (
    <Row>
      <Col className="mt-4">
        <Table>
          <thead>
            <tr>
              <th
                className="text-secondary fs-5 fw-normal pointer"
                onClick={() => sortNameHandler()}
              >ФИО {sortNameIcon}
              </th>
              <th
                className="text-secondary fs-5 fw-normal pointer"
                onClick={() => sortCityHandler()}
              >Город {sortCityIcon}
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="border-top-0">
            {elements}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}