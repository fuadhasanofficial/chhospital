// componet by fuad hasan

const TableRow = ({ pataints }) => {
  console.log(pataints);
  const { name, doctor } = pataints;
  return (
    <tr className="hover:bg-blue-100">
      <td className="border-t px-4 py-2">{name}</td>
      <td className="border-t px-4 py-2">{doctor}</td>
      <td className="border-t px-4 py-2">Oct 12, 2024</td>
      <td className="border-t px-4 py-2 text-green-500">Completed</td>
    </tr>
  );
};

export default TableRow;
