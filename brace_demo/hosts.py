import re
from django_hosts import patterns, host

host_patterns = patterns(
    "",
    host(re.sub(r"_", r"-", r"brace_demo"), "brace_demo.urls", name="brace_demo"),
)
