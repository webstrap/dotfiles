.vim
====


### install


    git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim
    vim +PluginInstall +qall

Command-T Linux

    sudo apt-get install vim-nox;
    sudo apt-get install ruby1.9.1-dev
    cd ~/.vim/bundle/command-t/ruby/command-t
    sudo ruby ./extconf.rb
    sudo make
    
Command-T OSX Mavericks

(with homebrew vim supporting the mac clip board and ruby2.0)

    brew install vim 
    cd ~/.vim/bundle/command-t/ruby/command-t
    sudo ruby ./extconf.rb
    sudo make

(or to use the pre-installed vim)

    sudo mv /usr/bin/ruby /usr/ruby/ruby2.0
    sudo ln -s /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/ruby /usr/bin/ruby
    cd ~/.vim/bundle/command-t/ruby/command-t
    sudo ruby ./extconf.rb
    sudo make
    sudo rm ruby
    sudo mv /usr/ruby/ruby2.0 /usr/bin/ruby

Vim-fugitive

    git config --global mergetool.fugitive.cmd 'vim -f -c "Gvdiff" "$MERGED"'
    git config --global merge.tool fugitive
    git config --global mergetool.prompt false

### vim commands

normal mode

    ,t          open command-t
                t   open selection as new tab
                v   open selection as new vertical split buffer
    <C-e>       toggle vim explorer
                t   open selection as new tab
                v   open selection as new vertical split buffer
    :Error      trigger syntax check
    ,{number}   switch to the tab with the given number e.g. ,2
   
    o        enter insert mode with new line below
    O        enter insert mode with new line above
    i        enter insert mode at the cursor position
    a        enter insert mode after the cursor position
    A        enter insert mode at the end of the line
    cw       delete the current word and enter insert mode
    dw       delete the current word
    x        delete the current character
    dd       delete the current line
    u        revert the last change
    <C-r>    restore the last undo
    p        paste the default register
    yy       yank the current line
   
    /{search}    search
    ?{search}    search backwards
    n            next result
    N            previous result
   
    <C-w><right> switch to the right split buffer
    <C-w><left>  switch to the left split buffer
    :tabe    create a new tab
   
    v        enter visual mode
    V        enter visual mode with line selection
    <C-v>    enter visual mode with block selection (vertical selection)
   
    gf       go to file if the cursor is on a file path
    <C-o>    go to the previous buffer (e.g. if used gf)
    *        go to the next word where the cursor is at the moment
    
    {       move one block/function up
    }       move one block/function down
    <C-u>   move half page up
    <C-d>   move half page down
    f{char} move to the character in the current line
    ;       move to last f{char} pattern
    ,       move to previous f{char} match
    l       move right arrow
    h       move left arrow
    j       move down arrow
    k       move up arrow
    w       move word wise
    W       move WORD wise
    b       move back word wise
    B       move back WORD wise

 
    :grep   use grep to find files in project
    :cn     next grep result
    :cp     previous grep result
    
    "{char} use a certain register for a task
    "+      use the clipboard, good when mouse is on and prevents copy to clipboard
   
    q{char} start stop a macro to register {char}
    @{char} execute the macro from register {char}
    @@      execute the last macro again

insert mode

    <Tab>   start autocomplete if the cursor is at the end of a word
    <ESC>   enter normal mode
    
visual mode

    y   yank the current selection to the default register
    i[  select inside brackets (cursor has to be inside as well)
    i]  select inside brackets (cursor has to be inside as well)
    i{  select inside brackets (cursor has to be inside as well)
    i'  select inside brackets (cursor has to be inside as well)
    a[  select around (including)brackets (cursor has to be inside as well)
    a]  select around (including) (cursor has to be inside as well)
        
    
fugitive vimdiff 3 way merge (git mergetool)

    [c          jump to previous change/conflict
    ]c          jump to the next change/conflict
    :diffget //2     diffget will change from target branch
    :diffget //3     diffget change from merge branch
    :dp         diffput the change from the current buffer to the middle buffer
    :Gwrite!    adds the current buffer to the index and close merge, so choose to keep one merge or target to keep it
    :Gwq        like above and quit the file
    :diffupdate update the coloring after diffput
