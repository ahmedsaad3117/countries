import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";


import "./tableCountry.css";

const TableCountry = (props) => {
  const { t } = useTranslation();
  let { id } = useParams();
  let idLink = id.toLocaleLowerCase().replace(/,\s|\s|_/gi,"-");
  const data = require(`../../assets/countries/${idLink}.json`);
  const [country, setCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    unit: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    value: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    rank: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    setCountry(data);
  }, []);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="">
        <h5 className="p-m-0">Search</h5>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <>
      <div id="header-table-rank" class="row">
        <div class="col-12 container text-center">
          <h1 id="countryName" class="display-1">
            {id}
          </h1>
        </div>
      </div>
      <div>
        {data && (
          <div className="datatable-doc-demo container ">
            <div className="card">
              <DataTable
                value={country}
                responsiveLayout="scroll"
                className="p-datatable-customers "
                header={header}
                rows={10}
                dataKey="id"
                rowHover
                selection={selectedCountry}
                onSelectionChange={(e) => setSelectedCountry(e.value)}
                filters={filters}
                filterDisplay="menu"
                responsiveLayout="scroll"
                style={{}}
              >
                <Column
                  field="unit"
                  header={t('table_unit')}
                  className="text-center"
                  style={{ textAlign: "center" }}
                />

                <Column
                  field="value"
                  header= {t('table_value')}
                  className="text-center"
                  style={{ maxWidth: "14rem", textAlign: "center" }}
                />
                <Column
                  field="rank"
                  header={t('table_rank')}
                  style={{ textAlign: "center !important" }}
                  className=""
                />
              </DataTable>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TableCountry;
