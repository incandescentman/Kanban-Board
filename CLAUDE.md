# Hello Claude.
We're seeing some ES-Lint warnings.  They're coming from two plug-ins that Create-React-App enables by default:

Rule What it enforces Where it fired
jsx-a11y/img-redundant-alt Alt-text shouldn't contain the words "image", "photo", or "picture". Screen readers already announce it's an image. Navbar.jsx, line 93
jsx-a11y/anchor-is-valid Every <a> needs a real, navigable href.  Empty ("#") or bogus (javascript:void(0)) values aren't accessible. Navbar.jsx, lines 113 & 161
react-hooks/exhaustive-deps Every value referenced inside a useEffect must either be stable or appear in the dependency array. sidebar/index.jsx, line 34

Below are concrete fixes or safe suppressions.

1 Fixes for Navbar.jsx

// ❌ before (line 93)
<img src={logo} alt="logo image" />

// ✅ after
<img src={logo} alt="Kanban Tailwind logo" />

// ❌ typical pattern that triggers anchor-is-valid
<a href="#">Home</a>

// ✅ 3 ways to satisfy the rule
/* 1. Real location */
<a href="/home">Home</a>

/* 2. If it's just a button styled like a link */
<button type="button" onClick={handleClick} className="text-blue-600 underline">
  Home
</button>

/* 3. If you're using React Router */
<Link to="/home">Home</Link>

Apply the same change at line 161.



2 Fix for sidebar/index.jsx

// ❌ before
useEffect(() => {
  if (isTabletMid) collapseSidebar();
}, []);          // <- missing dep

// ✅ include the variable in the list
useEffect(() => {
  if (isTabletMid) collapseSidebar();
}, [isTabletMid]);

If collapseSidebar is recreated on every render you should add it too:

}, [isTabletMid, collapseSidebar]);

(and wrap collapseSidebar in useCallback so it stays stable).



3 Suppressing a rule temporarily

If refactoring isn't feasible you can silence a specific line:

/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
<a href="#">Placeholder</a>

...but reserve this for one-offs; fixing the markup gives you an accessible app and keeps CI green.



Recap
 1. They're warnings - code still runs.
 2. Fix alt text, give every <a> a real destination (or convert to <button>/Link), and add missing hook dependencies.
 3. Your dev server will recompile and the warning list should shrink to zero.
