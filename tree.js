class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }
}

let h = new TreeNode("h");
let v = new TreeNode("v");
let f = new TreeNode("f");
let l = new TreeNode("l");
let p = new TreeNode("p");
let j = new TreeNode("j");
let b = new TreeNode("b");
let x = new TreeNode("x");
let c = new TreeNode("c");
let y = new TreeNode("y");
let z = new TreeNode("z");
let q = new TreeNode("q");

let s = new TreeNode("s");
s.left = h;
s.right = v;
let u = new TreeNode("u");
u.left = f;
let r = new TreeNode("r");
r.left = l;
let w = new TreeNode("w");
w.left = p;
w.right = j;
let d = new TreeNode("d");
d.left = b;
d.right = x;
let k = new TreeNode("k");
k.left = c;
k.right = y;
let g = new TreeNode("g");
g.left = z;
g.right = q;
let o = new TreeNode("o");

let i = new TreeNode("i");
i.left = s;
i.right = u;
let a = new TreeNode("a");
a.left = r;
a.right = w;
let n = new TreeNode("n");
n.left = d;
n.right = k;
let m = new TreeNode("m");
m.left = g;
m.right = o;

let e = new TreeNode("e");
e.left = i;
e.right = a;
let t = new TreeNode("t");
t.left = n;
t.right = m;

let root = new TreeNode("root");
root.left = e;
root.right = t;

let morseTree = new Tree(root);