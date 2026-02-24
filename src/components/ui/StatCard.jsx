export default function StatCard({ title, value, percentage, isPositive }) {
    return (
        <div className="card shadow-sm border-0"> 
            <div className="card-body">
                <h6 className="text-muted">{title}</h6>
                <h3 className="fw-bold">{value}</h3>
                <span className={`small ${isPositive ? 'text-success' : 'text-danger'}`}>
                    {isPositive ? '▲' : '▼'} {percentage}%
                </span>
            </div>
        </div>
    );
}