"""Dev server for the Weekend-Projects site.

Serves the current directory with Cache-Control: no-cache on every response,
so the browser always fetches fresh files during development (no stale cache).

Usage:
    python dev_server.py [port]     # default port 8000
"""
import http.server
import socketserver
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Tell the browser not to cache anything during development.
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


class ThreadingServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True


if __name__ == "__main__":
    with ThreadingServer(("", PORT), NoCacheHandler) as httpd:
        print(f"Serving on http://localhost:{PORT}  (no-cache enabled)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")
