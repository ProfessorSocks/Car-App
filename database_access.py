failed_attempts = {}

def log_failed_attempt(ip_address):
    if ip_address not in failed_attempts:
        failed_attempts[ip_address] = 0
    failed_attempts[ip_address] += 1
