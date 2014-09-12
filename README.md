# webstrap does holman's dotfiles

This is based on  [Zach Holman](http://github.com/holman)'s [dotfiles](http://github.com/holman/dotfiles)
and adjusted to my needs.

[Vim commands](./vim)

## install

Run this:

```sh
git clone --recursive git@github.com:webstrap/dotfiles.git ~/.dotfiles
cd ~/.dotfiles
script/bootstrap
script/install
```

## components

There's a few special files in the hierarchy.

- **bin/**: Anything in `bin/` will get added to your `$PATH` and be made
  available everywhere.
- **topic/\*.zsh**: Any files ending in `.zsh` get loaded into your
  environment.
- **topic/path.zsh**: Any file named `path.zsh` is loaded first and is
  expected to setup `$PATH` or similar.
- **topic/completion.zsh**: Any file named `completion.zsh` is loaded
  last and is expected to setup autocomplete.
- **topic/\*.symlink**: Any files ending in `*.symlink` get symlinked into
  your `$HOME`. This is so you can keep all of those versioned in your dotfiles
  but still keep those autoloaded files in your home directory. These get
  symlinked in when you run `script/bootstrap`.

