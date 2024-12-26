const StatusBadge = ({ status }) => {
  const statusClasses = {
    Disponible: "bg-green-100 text-green-800",
    Maintenance: "bg-yellow-100 text-yellow-800",
    reservé: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${statusClasses[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
