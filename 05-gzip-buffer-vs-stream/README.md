# gzip-buffer-vs-stream

This examples shows the different implementations (buffer vs streaming) for a simple gzip script.

## Run

Run the buffer version with:

```bash
node gzip-buffer.js test.txt
node gzip-buffer.js test_large.txt
```

Run the stream version with:

```bash
node gzip-stream.js test_large.txt
```
