import React from "react";
import { StaticQuery, graphql } from "gatsby";
import MainContent from "../MainContent/MainContent";
import Pagination from "../Pagination/Pagination";
import "./PaginatedContent.css";
import Search from "../Search/Search";

class PaginatedContent extends React.Component {
  render() {
    const { page, pages, prev, next, children } = this.props;
    let className = "";
    if (page > 1) {
      className = `${className} paged`;
    }
    return (
      <StaticQuery
        query={graphql`
          query SearchIndexQuery {
            siteSearchIndex {
              index
            }
          }
        `}
        render={data => (
          <>
            <Search searchIndex={data.siteSearchIndex.index} />
            <MainContent className={className}>
              {/* Previous/next page links - only displayed on page 2+ */}
              <div className="extra-pagination inner">
                <Pagination page={page} pages={pages} prev={prev} next={next} />
              </div>

              {children}

              {/* Previous/next page links - displayed on every page */}
              <Pagination page={page} pages={pages} prev={prev} next={next} />
            </MainContent>
          </>
        )}
      />
    );
  }
}

export default PaginatedContent;
