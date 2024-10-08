import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationUi({ total, itemsPerPage, pn, handlePagination }) {
  const totalPages = Math.ceil(total / itemsPerPage);
  const pageNumbers = [];

  // Generate page numbers dynamically
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="py-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            disabled={pn === 1}
            onClick={() => handlePagination(pn - 1)}
          />
        </PaginationItem>

        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              href="#"
              className={number === pn ? 'success' : ''}  // Conditionally apply the active class
              onClick={() => handlePagination(number)}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {totalPages > 5 && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className={totalPages === pn ? 'success' : ''}  // Apply to the last page if active
                onClick={() => handlePagination(totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            disabled={pn === totalPages}
            onClick={() => handlePagination(pn + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
