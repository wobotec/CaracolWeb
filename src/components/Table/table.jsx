export function Table({ columns, data }) {
    return (
      <div className="overflow-x-auto 
                      ounded-lg 
                      border 
                      border-gray-200 
                      dark:border-gray-700">
        <table className="min-w-full 
                         border-collapse 
                         text-sm">
          
          {/* HEADER */}
          <thead className="bg-gray-100 
                            dark:bg-gray-800">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 
                            py-3 
                            text-left 
                            font-semibold 
                            text-gray-700 
                            dark:text-gray-300"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
  
          {/* BODY */}
          <tbody className="divide-y 
                            divide-gray-200 
                            dark:divide-gray-700">
            {data.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 
                            dark:hover:bg-gray-700 
                            transition"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-4 
                               py-3 
                               text-gray-600 
                               dark:text-gray-300"
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
  
        </table>
      </div>
    )
  }
  