// This algorithm is called the Sieve of Eratosthenes
// Time complexity: O(n log log n)
// Space complexity: O(n)
export function getPrimeNumbers__sieve(n: number) {
	const sieve = new Array(n + 1).fill(true);
	sieve[0] = false;
	sieve[1] = false;

	for (let i = 2; i <= n; i++) {
		// if the current number is prime, then
		// we go through all multiples of i until the square root of n
		// and mark those as not prime
		if (sieve[i] && i * i <= n) {
			for (let j = i * i; j <= n; j += i) {
				sieve[j] = false;
			}
		}
	}

	const result: number[] = [];

	for (let i = 0; i <= n; i++) {
		if (sieve[i]) {
			result.push(i);
		}
	}

	return result;
}

// This algorithm is called the Linear Sieve
// Time complexity: O(n)
// Space complexity: O(n)
export function getPrimeNumbers__linear(n: number) {
	// lp[i] is the lowest prime factor of i
	const lp = new Array(n + 1).fill(0);
	// primes is the list of prime numbers
	const primes: number[] = [];

	for (let i = 2; i <= n; i++) {
		// this denotes that i is a prime number
		if (lp[i] === 0) {
			lp[i] = i;
			primes.push(i);
		}

		// make all multiples of primes[j] as not prime by setting the lowest prime factor
		for (let j = 0; i * primes[j] <= n; j++) {
			lp[i * primes[j]] = primes[j];
			// if the lowest prime factor of i is the same as the current prime number,
			// then we can break out of the loop
			if (primes[j] === lp[i]) {
				break;
			}
		}
	}

	return primes;
}

export function getPrimeNumbers(
	n: number,
	method: "sieve" | "linear" = "sieve",
) {
	if (method === "sieve") {
		return getPrimeNumbers__sieve(n);
	}

	return getPrimeNumbers__linear(n);
}
