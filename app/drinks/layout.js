const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8 ml-10">
        <pre data-prefix="$">
          <code> npx create-next-app@latest nextjs-project</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
