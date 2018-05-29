---
layout: npips
title: NPIP Purpose and Guidelines
author: Alex V <alex@nav.community>
date: '2018-05-27T13:44:40+12:00'
comments_summary: No comments yet.
npip_status: Draft
npip_type:
  - Process
npip_number: "001"

---
NPIP stands for NavCoin Protocol Improvement Proposal. A NPIP is a design document providing information to the NavCoin community, or describing a new feature for NavCoin protocol or its processes or environment. The NPIP should provide a concise technical specification of the feature and a rationale for the feature.
<!--more-->

NPIP stands for NavCoin Protocol Improvement Proposal. A NPIP is a design document providing information to the NavCoin community, or describing a new feature for NavCoin protocol or its processes or environment. The NPIP should provide a concise technical specification of the feature and a rationale for the feature.

We intend NPIPs to be the primary mechanisms for proposing new features, for collecting community input on an issue, and for documenting the design decisions that have gone into NavCoin. The NPIP author is responsible for building consensus within the community and documenting dissenting opinions.

Because the NPIPs are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

## NPIP Types

There are three kinds of NPIP:

* A Standards Track NPIP describes any change that affects most or all NavCoin implementations, such as a change to the network protocol, a change in block or transaction validity rules, or any change or addition that affects the interoperability of applications using NavCoin.
* An Informational NPIP describes a NavCoin design issue, or provides general guidelines or information to the NavCoin community, but does not propose a new feature. Informational NPIPs do not necessarily represent a NavCoin community consensus or recommendation, so users and implementors are free to ignore Informational NPIPs or follow their advice.
* A Process NPIP describes a process surrounding NavCoin, or proposes a change to (or an event in) a process. Process NPIPs are like Standards Track NPIPs but apply to areas other than the NavCoin protocol itself. They may propose an implementation, but not to NavCoin's codebase; they often require community consensus; unlike Informational NPIPs, they are more than recommendations, and users are typically not free to ignore them. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in NavCoin development. Any meta-NPIP is also considered a Process NPIP.

## NPIP Work Flow

The NPIP process begins with a new idea for NavCoin. Each potential NPIP must have a champion -- someone who writes the NPIP using the style and format described below, shepherds the discussions in the appropriate forums, and attempts to build community consensus around the idea. The NPIP champion (a.k.a. Author) should first attempt to ascertain whether the idea is NPIP-able. Posting to the different NavCoin social communication channels is the best way to go about this.

Vetting an idea publicly before going as far as writing a NPIP is meant to save both the potential author and the wider community time. Many ideas have been brought forward for changing NavCoin that have been rejected for various reasons. Asking the NavCoin community first if an idea is original helps prevent too much time being spent on something that is guaranteed to be rejected based on prior discussions (searching the internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will work for most people in most areas where NavCoin is used. Small enhancements or patches often don't need standardisation between multiple projects; these don't need a NPIP and should be injected into the relevant NavCoin development work flow with a patch submission to the applicable NavCoin issue tracker.

Once the champion has asked the NavCoin community as to whether an idea has any chance of acceptance, a draft NPIP should be presented as a pull request to http://www.github.com/navcoin/npips. This draft must be written in NPIP style as described below, else it will be rejected without further regard until proper formatting rules are followed.

NPIP authors are responsible for collecting community feedback on both the initial idea and the NPIP before submitting it for review. However, wherever possible, long open-ended discussions on public social channels should be avoided. Strategies to keep the discussions efficient include: setting up a separate public channel for the topic, having the NPIP author accept private comments in the early design phases, setting up a wiki page or git repository, etc. NPIP authors should use their discretion here.

It is highly recommended that a single NPIP contain a single key proposal or new idea. The more focused the NPIP, the more successful it tends to be. If in doubt, split your NPIP into several well-focused ones.

The NPIP editors assign NPIP numbers and change their status. Please send all NPIP-related email to the NPIP editor, which is listed under [[#NPIP_Editors|NPIP Editors]] below. Also see [[#NPIP_Editor_Responsibilities__Workflow|NPIP Editor Responsibilities & Workflow]]. The NPIP editor reserves the right to reject NPIP proposals if they appear too unfocused or too broad.

Authors MUST NOT self assign NPIP numbers, but should use an alias such as "npip-johndoe-infinitenavcoins" which includes the author's name/nick and the NPIP subject.

If the NPIP editor gives his OK, he will assign the NPIP a number, label it as Standards Track, Informational, or Process, give it status "Draft", and will ask the author to update the document's contents and file name with the changes. After then the PR will be accepted. The NPIP editor will not unreasonably deny a NPIP. Reasons for denying NPIP status include duplication of effort, disregard for formatting rules, being too unfocused or too broad, being technically unsound, not providing proper motivation or addressing backwards compatibility, or not in keeping with the NavCoin philosophy. For a NPIP to be accepted it must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement. The proposed implementation, if applicable, must be solid and must not complicate the protocol unduly.

The NPIP author may update the Draft as necessary in the git repository. Updates to drafts may also be submitted by the author as pull requests.

Standards Track NPIPs consist of two parts, a design document and a reference implementation. The NPIP should be reviewed and accepted before a reference implementation is begun, unless a reference implementation will aid people in studying the NPIP. Standards Track NPIPs must include an implementation -- in the form of code, a patch, or a URL to same -- before it can be considered Final.

Once a NPIP has been accepted, the reference implementation must be completed. When the reference implementation is complete and accepted by the community, the status will be changed to "Final".

A NPIP can also be assigned status "Deferred". The NPIP author or editor can assign the NPIP this status when no progress is being made on the NPIP. Once a NPIP is deferred, the NPIP editor can re-assign it to draft status.

A NPIP can also be "Rejected". Perhaps after all is said and done it was not a good idea. It is still important to have a record of this fact.

NPIPs can also be superseded by a different NPIP, rendering the original obsolete. This is intended for Informational NPIPs, where version 2 of an API can replace version 1.

The possible paths of the status of NPIPs are as follows:

<img src=npip-0001/process.png></img>

Some Informational and Process NPIPs may also have a status of "Active" if they are never meant to be completed. E.g. NPIP 1 (this NPIP).

## What belongs in a successful NPIP?

Each NPIP should have the following parts:

* Preamble -- RFC 822 style headers containing meta-data about the NPIP, including the NPIP number, a short descriptive title (limited to a maximum of 44 characters), the names, and optionally the contact info for each author, etc.

* Abstract -- a short (~200 word) description of the technical issue being addressed.

* Copyright/public domain -- Each NPIP must either be explicitly labelled as placed in the public domain (see this NPIP as an example) or licensed under the Open Publication License.

* Specification -- The technical specification should describe the syntax and semantics of any new feature. The specification should be detailed enough to allow competing, interoperable implementations for any of the current NavCoin platforms (NavCoin Core, Next, NavPay, etc.).

* Motivation -- The motivation is critical for NPIPs that want to change the NavCoin protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the NPIP solves. NPIP submissions without sufficient motivation may be rejected outright.

* Rationale -- The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages.

* The rationale should provide evidence of consensus within the community and discuss important objections or concerns raised during discussion.

* Backwards Compatibility -- All NPIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The NPIP must explain how the author proposes to deal with these incompatibilities. NPIP submissions without a sufficient backwards compatibility treatise may be rejected outright.

* Reference Implementation -- The reference implementation must be completed before any NPIP is given status "Final", but it need not be completed before the NPIP is accepted. It is better to finish the specification and rationale first and reach consensus on it before writing code.

* The final implementation must include test code and documentation appropriate for the NavCoin protocol.

## NPIP Formats and Templates

NPIP should be written in mediawiki or markdown format.

### NPIP Header Preamble

Each NPIP must begin with an RFC 822 style header preamble. The headers must appear in the following order. Headers marked with "*" are optional and are described below. All other headers are required.

<pre>
  NPIP: <NPIP number>
  Title: <NPIP title>
  Author: <list of authors' real names and optionally, email addrs>
* Discussions-To: <email address>
  Status: <Draft | Active | Accepted | Deferred | Rejected |
           Withdrawn | Final | Superseded>
  Type: <Standards Track | Informational | Process>
  Created: <date created on, in ISO 8601 (yyyy-mm-dd) format>
* Post-History: <dates of postings in navcoin public channels>
* Replaces: <NPIP number>
* Superseded-By: <NPIP number>
* Resolution: <url>
</pre>

The Author header lists the names, and optionally the email addresses of all the authors/owners of the NPIP. The format of the Author header value must be

  Random J. User <address@dom.ain>

if the email address is included, and just

  Random J. User

if the address is not given.

If there are multiple authors, each should be on a separate line following RFC 2822 continuation line conventions.

Note: The Resolution header is required for Standards Track NPIPs only. It contains a URL that should point to an email message or other web resource where the pronouncement about the NPIP is made.

While a NPIP is in private discussions (usually during the initial Draft phase), a Discussions-To header will indicate the mailing list or URL where the NPIP is being discussed. No Discussions-To header is necessary if the NPIP is being discussed privately with the author, or on the NavCoin public channels.

The Type header specifies the type of NPIP: Standards Track, Informational, or Process.

The Created header records the date that the NPIP was assigned a number, while Post-History is used to record the dates of when new versions of the NPIP are posted to public channels. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

NPIPs may have a Requires header, indicating the NPIP numbers that this NPIP depends on.

NPIPs may also have a Superseded-By header indicating that a NPIP has been rendered obsolete by a later document; the value is the number of the NPIP that replaces the current document. The newer NPIP must have a Replaces header containing the number of the NPIP that it rendered obsolete.

### Auxiliary Files

NPIPs may include auxiliary files such as diagrams. Image files should be included in a subdirectory for that NPIP. Auxiliary files must be named NPIP-XXXX-Y.ext, where "XXXX" is the NPIP number, "Y" is a serial number (starting at 1), and "ext" is replaced by the actual file extension (e.g. "png").

## Transferring NPIP Ownership

It occasionally becomes necessary to transfer ownership of NPIPs to a new champion. In general, we'd like to retain the original author as a co-author of the transferred NPIP, but that's really up to the original author. A good reason to transfer ownership is because the original author no longer has the time or interest in updating it or following through with the NPIP process, or has fallen off the face of the 'net (i.e. is unreachable or not responding to email). A bad reason to transfer ownership is because you don't agree with the direction of the NPIP. We try to build consensus around a NPIP, but if that's not possible, you can always submit a competing NPIP.

If you are interested in assuming ownership of a NPIP, send a message asking to take over, addressed to both the original author and the NPIP editor. If the original author doesn't respond to email in a timely manner, the NPIP editor will make a unilateral decision (it's not like such decisions can't be reversed :).

## NPIP Editors

The current NPIP editor is Alex V who can be contacted at [[mailto:alex@nav.community|alex@nav.community]].

## NPIP Editor Responsibilities & Workflow

All NPIP-related correspondence should be sent (or CC'd) to alex@nav.community.

For each new NPIP that comes in an editor does the following:

* Read the NPIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to be accepted.
* The title should accurately describe the content.
* Edit the NPIP for language (spelling, grammar, sentence structure, etc.), markup (for reST NPIPs), code style (examples should match NPIP 8 & 7).

If the NPIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the NPIP is ready for the repository it should be submitted as a "pull request" to the [https://github.com/navcoin/npips navcoin/npips] repository on GitHub where it may get further feedback.

The NPIP editor will:

* Assign a NPIP number (almost always just the next available number, but sometimes it's a special/joke number, like 666 or 3141) in the pull request comments.

* Merge the pull request when the author is ready (allowing some time for further peer review).

* List the NPIP in [[README.md]]

* Send email back to the NPIP author with next steps.

The NPIP editors are intended to fulfill administrative and editorial responsibilities. The NPIP editors monitor NPIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

## History

This document was derived heavily from Python's PEP-0001 and Bitcoin's BIP-0001. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use in the NavCoin Protocol Improvement Process, and should not be bothered with technical questions specific to NavCoin or the NPIP process. Please direct all comments to the NPIP editors.
