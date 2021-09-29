You can set up your own node by either using our pre-built binaries, or otherwise build it yourself from the source code.

#### Use pre-built binaries

If you wish to use our pre-built binaries, then please visit our [Get Started](https://navcoin.org/en/get-started) section on [navcoin.org](https://navcoin.org).

#### Build from source on Linux

This guide has been tested on Ubuntu 20.04.

Install essential packages:
```bash
sudo apt update
sudo apt upgrade
sudo apt-get -y install build-essential libtool autotools-dev automake pkg-config git curl libattr1-dev cmake
```

Clone the repository:
```bash
git clone https://github.com/navcoin/navcoin-core.git
```

Change directory to the repository:
```bash
cd navcoin-core
```

Build the dependencies:
```bash
cd ./depends && make -j$(nproc) && cd .. && ./autogen.sh && ./configure --prefix=`pwd`/depends/`uname -m`-pc-linux-gnu && make -j$(nproc) &
```

Once the build finishes, you can launch the daemon with `./src/navcoind` or the Qt wallet with `./src/qt/navcoin-qt`.

#### Build from source on OSX

Install essential packages:
```bash
brew install automake berkeley-db4 libtool boost --c++11 miniupnpc openssl pkg-config homebrew/core/protobuf260 --c++11 qt5 libevent curl
```

Clone the repository:
```bash
git clone https://github.com/navcoin/navcoin-core.git
```

Change directory to the repository:
```bash
cd navcoin-core
```

Build the dependencies:
```bash
cd ./depends && make -j$(nproc) && cd .. && ./autogen.sh && ./configure --prefix=`pwd`/depends/`uname -m`-pc-linux-gnu && make -j$(nproc) &
```

#### Build from source on Windows 10

You can [install Ubuntu from Windows Store](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Once Ubuntu is installed, follow the previous steps to build from source on Linux.
