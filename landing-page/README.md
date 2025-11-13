so in this commit i have done:

1. in layout.tsx i have imported Inter and Manrope font, and passed to children.
2. in globals.css i have added dark class from tailwind docs and updated dark background and foreground, removed colore-prefers-scheme
3. installed next-theme for getting system theme and to make dark toggle mode
4. for dark toggle button i have used sun and moon icon, which comes from lucide-react library.
5. then creates themeProvider which is just wrapper for children, then in layout.tsx i wrrapped this themeprovider with children and pass required attributes, like these { attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange }
6. then created dark mode toggle component.