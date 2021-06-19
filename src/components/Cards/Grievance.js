import React from 'react'
import { grievanceData } from "./grievanceData";

export default function Grievance(props) {

  function handleSubmit(e){
    e.preventDefault();
  }

    return (
        <tr>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <a href={handleSubmit}><i className="fas fa-download text-emerald-500 mr-2"></i></a>
          </td>
          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            {props.name}
          </th>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {props.date}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {props.status}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {props.org}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {props.org}
          </td>
        </tr>
      )
  }
