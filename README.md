# Headlines

This is the original source code for [The Daily
Lore](https://www.dailylore.com/) website. The current source code is in [this
repo](https://github.com/dguo/dailylore).

Before making this repo public, I had to do some clean up because I didn't know
much about software development when I first worked on the project.

My commits had bad email addresses because I evidently didn't set up my
`.gitconfig` back then. I used this [GitHub
script](https://help.github.com/articles/changing-author-info/) to rewrite the
author info.

I also didn't know about the concept of
[gitignore](https://git-scm.com/docs/gitignore), so I had `.pyc` files, Excel
spreadsheets, and even a PDF explaining how SVGs work in the repo.  I removed
them from the Git history using [The
BFG](https://rtyley.github.io/bfg-repo-cleaner/).

My worst mistake was committing secrets, like my [AWS secret access
key](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys).
I used The BFG to remove them from the Git history as well.

The code is also generally quite bad, but it's nice to look back and know that
I've gotten better at software development since then.

## License

MIT
