# deno
Deno Library

## run
```
deno run <file>
```

## test
```
deno test <file>                # test the file
deno test --coverage=coverage   # test with coverage
deno coverage coverage          # show coverage
```

## shortcuts
```
# in CMD - purge folder, run test with coverage and show coverage
rd /s/q coverage & deno test --coverage=coverage && deno coverage coverage            

# in PowerShell - purge folder, run test with coverage and show coverage                      
Remove-Item -LiteralPath "coverage" -Force -Recurse; deno test --coverage=coverage; deno coverage coverage  
```