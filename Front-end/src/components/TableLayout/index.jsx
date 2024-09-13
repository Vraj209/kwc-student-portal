import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const TableLayout = (props) => {
  const { title, columns, data, actionHandlers } = props;
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-green-200">
          <p className="text-5xl text-green-600">{title}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                {columns.map((column, index) => (
                  <th key={index} className="px-4 py-3">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {data.map((row, rIndex) => (
                <tr key={rIndex} className="text-gray-700">
                  {columns.map((column, index) => (
                    <>
                      {column.field === "Actions" ? (
                        <td className="px-4 py-3 flex justify-between">
                          <button
                            type="button"
                            className="text-sm font-semibold text-blue-500 px-2 py-1"
                            onClick={() => actionHandlers.view(row)}
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="text-sm font-semibold text-yellow-500 px-2 py-1"
                            onClick={() => actionHandlers.update(row)}
                          >
                            Edit
                          </button>
                        </td>
                      ) : (
                        <td key={index} className="px-4 py-3">
                          {row[column.field]}
                        </td>
                      )}
                    </>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto">
          <div className="mb-4 flex justify-start">
            <button
                onClick={() => actionHandlers.export(data)}
              className="w-1/6 mt-3  bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Export to Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
