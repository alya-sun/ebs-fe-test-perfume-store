import { useProducts } from "@/hooks/useProducts";
import classes from '../Home.module.css'

export const Pagination: React.FC = () => {
    const { handlePageChange, currentPage, totalPages } = useProducts();
    return(
        <div className={classes.pagination}>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                ⬅
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                    key={page}
                    className={currentPage === page ? classes.active : ''}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                ➡
            </button>
        </div>
    );
};