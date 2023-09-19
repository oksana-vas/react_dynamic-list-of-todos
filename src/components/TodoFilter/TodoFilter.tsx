import React from 'react';
import './TodoFilter.scss';
import { Status } from '../../types/Status';

type Props = {
  setSelectedStatus: (filter: Status) => void,
  query: string,
  setQuery: (query: string) => void,
};

export const TodoFilter: React.FC<Props> = ({
  setSelectedStatus = () => { },
  query,
  setQuery = () => { },
}) => {
  const onFilterSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value as Status);
  };

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const clearInput = () => {
    setQuery('');
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={onFilterSelect}
          >
            <option value={Status.All}>All</option>
            <option value={Status.Active}>Active</option>
            <option value={Status.Completed}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={handleQuery}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query && (
          <span
            className="icon is-right pointer-events-all"
          >
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={clearInput}
            />
          </span>
        )}
      </p>
    </form>
  );
};
