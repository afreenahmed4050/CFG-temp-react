import React from 'react'

export default function Grievance() {

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <tr>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <a href="{handleSubmit}"><i className="fas fa-download text-emerald-500 mr-2"></i></a>
                </td>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  GPS Piau Muniyari
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  13-Sep-2018
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-circle text-orange-500 mr-2"></i>
                  In Progress
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Additional Deputy Commissioner (ADC), Sonipat
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Construction of rain water harvest facility and arrangement of medicine for insects and pests
                </td>
        </tr>
    )
}
