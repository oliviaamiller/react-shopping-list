import { useState } from 'react';
import styles from './Item.css';

export default function Item({ item, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let listContent;

  if (isEditing) {
    listContent = (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(false);
        }}
      >
        <input
          value={item.text}
          onChange={(e) => {
            onEdit({
              ...item,
              text: e.target.value,
            });
          }}
        />
        <button type="submit">Save</button>
      </form>
    );
  } else {
    listContent = (
      <>
        <p
        //   style={{ textDecoration: item.bought ? 'line-through' : null }}
        //   onClick={() => item.bought === true}
        >
          {item.text}
        </p>
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <div className={styles.item}>
      {listContent}
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}
