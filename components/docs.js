const Docs = ({ docs }) => {
  return (
    <div className="docs">
      {docs.map((column) => (
        <div className="docs-column">
          {column.map((doc) => (
            <div className="doc">
              <a
                href={`https://precursorapp.com/document/${doc.id}`}
                target="_blank"
              >
                <img
                  src={`https://precursorapp.com/document/${doc.id}.svg`}
                  alt=""
                />
              </a>
              <div className="doc-caption">{doc.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Docs;
